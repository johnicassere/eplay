import { useEffect, useState } from "react"
import * as Yup from 'yup'
import { useFormik } from "formik"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

import Button from "../../components/Button"
import Card from "../../components/Card"

import barCode from '../../assets/images/boleto.png'
import credirCard from '../../assets/images/cartao.png'

import { usePurchaseMutation } from "../../services/api"

import * as S from './styles'
import { RootReducer } from "../../store"
import { getTotalPrice, parseToBrl } from "../../utils"


const currentYear = new Date().getFullYear()
const currentMoth = new Date().getMonth()

type Installment = {
    quantity: number
    amount: number
    formattedAmount: string
}


const Checkout = () => {
    const [ payWithCard, setpayWithCard] = useState(false)
    const [ purchase, { data, isSuccess }] = usePurchaseMutation()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const [installments, setInstallments] = useState<Installment[]>([])
    const totalPrice = getTotalPrice(items)

   
    const form = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            cpf: '',
            deliveryEmail:'',
            confirmDeliveryEmail:'',
            cardOwner:'',
            cpfCardOwner:'',
            cardDisplayName:'',
            cardNumber:'',
            expiresMonth:'',
            expiresYear:'',
            cardCode:'',
            installments: 1,
        },
       
        validationSchema: Yup.object({
            fullName: Yup.string().min(5, 'O nome precisa ter pelo menos 5 caracteres').required('Campo obrigatório'),
            email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
            cpf: Yup.string().min(14, 'O campo precisa ter pelo menos 14 caracteres').max(14, 'O campo precisa ter pelo menos 14 caracteres').required('Campo obrigatório'),
            deliveryEmail: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
            confirmDeliveryEmail: Yup.string().oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes').required('Campo obrigatório'),

            cardOwner: Yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
            cpfCardOwner: Yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
            cardNumber: Yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
            expiresMonth: Yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
            expiresYear: Yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
            cardCode: Yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
            installments: Yup.string().when((values, schema) => payWithCard ? schema.required('Campo obrigatório') : schema),
            

        }),
        onSubmit: (values) => {
            purchase({
                billing: {
                    document: values.cpf,
                    email: values.email,
                    name: values.fullName
                },
                delivery: {
                    email: values.deliveryEmail
                },
                payment:{
                    installments: 1,
                    card: {
                        active: payWithCard,
                        code: Number(values.cardCode),
                        name: values.cardDisplayName,
                        number: values.cardNumber,
                        owner: {
                            document: values.cpfCardOwner,
                            name: values.cardOwner
                        },
                        expires: {
                            month: currentMoth,
                            year: currentYear
                        }

                    }
                },
                products:[
                    {
                        id: 1,
                        price: 10
                    }
                ]
            })
        },
            
    })


    const checkIputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid

        return hasError
    }


    useEffect(() =>{
        const calculateInstallments = () => {
            const installmentsArray: Installment[] = []
            for(let i = 1; i <= 6; i++){
                installmentsArray.push({
                    quantity: i,
                    amount: totalPrice / i,
                    formattedAmount: parseToBrl(totalPrice / i)
                })
            }

            return installmentsArray
        }

        if(totalPrice > 0){
            setInstallments(calculateInstallments())
        }
    },[totalPrice])

    if(items.length === 0){
        return <Navigate to='/' />
    }



    return (
       <div className="container">
        {isSuccess ? (
              <Card title="Muito obrigado">
              <>
                  <p>
                  É com satisfação que informamos que recebemos seu pedido com sucesso!<br/>
                  Abaixo estão os detalhes da sua compra:<br/>
                  Número do pedido: {data.orderId} <br/>
                  Forma de pagamento: {payWithCard ? 'Cartão de crédito' : 'Boleto bancário'}
                  </p>
                  <p className="margin-top">
                  Caso tenha optado pelo pagamento via boleto bancário, lembre-se de que a confirmação pode levar até 3 dias úteis. 
                  Após a aprovação do pagamento, enviaremos um e-mail contendo o código de ativação do jogo.
                  </p>
                  <p className="margin-top">
                  Se você optou pelo pagamento com cartão de crédito, a liberação do código de ativação ocorrerá após a 
                  aprovação da transação pela operadora do cartão. Você receberá o código no e-mail cadastrado em nossa loja. 
                  </p>
                  <p className="margin-top">
                  Pedimos que verifique sua caixa de entrada e a pasta de spam para garantir que receba nossa comunicação.
                  Caso tenha alguma dúvida ou necessite de mais informações, por favor, entre em contato conosco através dos nossos canais de atendimento ao cliente.
                  </p>
                  <p className="margin-top">
                  Agradecemos por escolher a EPLAY e esperamos que desfrute do seu jogo!
                  </p>
              </>
          </Card>
        ): (
            <form onSubmit={form.handleSubmit} >
            <Card title="Dados de cobrança">
                <>
                <S.Row>
                    <S.InputGroup>
                        <label htmlFor="fullName">Nome Completo</label>
                        <input 
                        id="fullName" type="text" 
                        name="fullName" value={form.values.fullName} 
                        onChange={form.handleChange} 
                        onBlur={form.handleBlur}
                        className={checkIputHasError('fullName') ? 'error' : ''}
                        />
                        
                    </S.InputGroup>
                    <S.InputGroup>
                        <label htmlFor="email">E-mail</label>
                        <input id= "email"
                         type="email" name="email" 
                         value={form.values.email} 
                         onChange={form.handleChange} 
                         onBlur={form.handleBlur}
                         className={checkIputHasError('email') ? 'error' : ''}
                         />
                        
                    </S.InputGroup>
                    <S.InputGroup>
                        <label htmlFor="cpf">CPF</label>
                        <input id="cpf" 
                        type="text" 
                        name="cpf" 
                        value={form.values.cpf} 
                        onChange={form.handleChange} 
                        onBlur={form.handleBlur}
                        className={checkIputHasError('cpf') ? 'error' : ''}
                        />
                        
                    </S.InputGroup>
                </S.Row>
                <h3 className="margin-top">Dados de entrega - conteudo digital</h3>
                <S.Row>
                    <S.InputGroup>
                        <label htmlFor="deliveryEmail">E-mail</label>
                        <input id="deliveryEmail"
                         type="email" 
                         name="deliveryEmail" 
                         value={form.values.deliveryEmail} 
                         onChange={form.handleChange} 
                         onBlur={form.handleBlur}
                         className={checkIputHasError('deliveryEmail') ? 'error' : ''}
                         />
                        
                    </S.InputGroup>
                    <S.InputGroup>
                        <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
                        <input id="confirmDeliveryEmail" 
                        type="email" 
                        name="confirmDeliveryEmail" 
                        value={form.values.confirmDeliveryEmail} 
                        onChange={form.handleChange} 
                        onBlur={form.handleBlur}
                        className={checkIputHasError('confirmDeliveryEmail') ? 'error' : ''}
                        />
                        
                    </S.InputGroup>
                </S.Row>
                </>
                </Card>
                <Card title="Pagamento">
                    <>
                        <S.TabButton 
                        isActive={!payWithCard} 
                        onClick={() => setpayWithCard(false)}
                        type="button"
                        >
                            <img src={barCode} alt="Boleto" />
                            Boleto bancário
                        </S.TabButton>
                        <S.TabButton 
                        isActive={payWithCard} 
                        onClick={() => setpayWithCard(true)}
                        type="button"
                        >
                            <img src={credirCard} alt="Cartão de crédito" />
                            Cartão de crédito
                        </S.TabButton>
                        <div className="margin-top">
                        {payWithCard ? (
                            <>
                                <S.Row>
                                    <S.InputGroup>
                                        <label htmlFor="cardOwner">
                                            Nome do titular do cartão
                                        </label>
                                        <input id="cardOwner" 
                                        type="text" name="cardOwner" 
                                        value={form.values.cardOwner} 
                                        onChange={form.handleChange} 
                                        onBlur={form.handleBlur}
                                        className={checkIputHasError('cardOwner') ? 'error' : ''}
                                        />
                                        
                                    </S.InputGroup>
                                    <S.InputGroup>
                                        <label htmlFor="cpfCardOwner">
                                            CPF do titular do cartão
                                        </label>
                                        <input id="cpfCardOwner" 
                                        type="text" 
                                        name="cpfCardOwner" 
                                        value={form.values.cpfCardOwner} 
                                        onChange={form.handleChange} 
                                        onBlur={form.handleBlur}
                                        className={checkIputHasError('cpfOwner') ? 'error' : ''}
                                        />
                                        
                                    </S.InputGroup>
                                </S.Row>
                                <S.Row marginTop='24px'>
                                    <S.InputGroup>
                                        <label htmlFor="cardDisplayName">
                                            Nome no cartão
                                        </label>
                                        <input id="cardDisplayName" 
                                        type="text" 
                                        name="cardDisplayName" 
                                        value={form.values.cardDisplayName} 
                                        onChange={form.handleChange} 
                                        onBlur={form.handleBlur}
                                        className={checkIputHasError('cardDisplayName') ? 'error' : ''}
                                        />
                                        
                                    </S.InputGroup>
                                    <S.InputGroup>
                                        <label htmlFor="cardNumber">
                                            Número do cartão
                                        </label>
                                        <input id="cardNumber" 
                                        type="text" 
                                        name="cardNumber" 
                                        value={form.values.cardNumber} 
                                        onChange={form.handleChange} 
                                        onBlur={form.handleBlur}
                                        className={checkIputHasError('cardNumber') ? 'error' : ''}
                                        />
                                        
                                    </S.InputGroup>
                                    <S.InputGroup maxWidth='123px'>
                                        <label htmlFor="expiresMonth">
                                            Mês de expiração
                                        </label>
                                        <input id="expiresMonth" 
                                        type="text" 
                                        name="expiresMonth" 
                                        value={form.values.expiresMonth} 
                                        onChange={form.handleChange} 
                                        onBlur={form.handleBlur}
                                        className={checkIputHasError('expiresMonth') ? 'error' : ''}
                                        />
                                        
                                    </S.InputGroup>
                                    <S.InputGroup maxWidth='123px'>
                                        <label htmlFor="expiresYear">
                                            Ano de expiração
                                        </label>
                                        <input id="expiresYear" 
                                        type="text" name="expiresYear" 
                                        value={form.values.expiresYear} 
                                        onChange={form.handleChange} 
                                        onBlur={form.handleBlur}
                                        className={checkIputHasError('expiresYear') ? 'error' : ''}
                                        />
                                        
                                    </S.InputGroup>
                                    <S.InputGroup maxWidth='48px'>
                                        <label htmlFor="cardCode">
                                            CVV
                                        </label>
                                        <input id="cardCode" 
                                        type="text" 
                                        name="cardCode" 
                                        value={form.values.cardCode} 
                                        onChange={form.handleChange} 
                                        onBlur={form.handleBlur}
                                        className={checkIputHasError('cardCode') ? 'error' : ''}
                                        />
                                        
                                    </S.InputGroup>
                                </S.Row>
                                <S.Row marginTop='24px'>
                                    <S.InputGroup maxWidth='150px'>
                                        <label htmlFor="installments">Parcelamento</label>
                                        <select id="installments" 
                                        name="installments" 
                                        value={form.values.installments} 
                                        onChange={form.handleChange} 
                                        onBlur={form.handleBlur}
                                        className={checkIputHasError('installments') ? 'error' : ''}
                                        >
                                            {installments.map((installment) => (
                                                <option key={installment.quantity}>
                                                {installment.quantity}x de {' '}
                                                {installment.formattedAmount}</option>

                                            ))}
                                        </select>
                                        
                                    </S.InputGroup>
                                </S.Row>
                            </>
                        ) : (
                            <p>
                            Ao optar por essa forma de pagamento, é importante lembrar que a confirmação pode 
                            levar até 3 dias úteis, devido aos prazos estabelecidos pelas instituições financeiras. 
                            Portanto, a liberação do código de ativação do jogo adquirido ocorrerá somente após a 
                            aprovação do pagamento do boleto.
                            </p>

                        )}

                        </div>
                    </>
                </Card>
                <Button type="submit" title="Clique aqui para finalizar a compras">
                    Finalizar compra
                </Button>
            </form>

        )}
        
      
       </div>
    )
}

export default Checkout