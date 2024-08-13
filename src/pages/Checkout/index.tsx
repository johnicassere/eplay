import { useState } from "react"
import Button from "../../components/Button"
import Card from "../../components/Card"
import { Row, InputGroup, TabButton } from './styles'
import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'
import { useFormik } from "formik"
import * as Yup from 'yup'


const Checkout = () => {

    const [ payWithCard, setpayWithCard] = useState(false)
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
            console.log(values);
        },
            
    })

    const getErrorMessage = (fieldName: string, message?: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors

        if(isTouched && isInvalid) return message
        return ''
    }

    return (
        <form onSubmit={form.handleSubmit} className="container">
            <Card title="Dados de cobrança">
                <>
                <Row>
                    <InputGroup>
                        <label htmlFor="fullName">Nome Completo</label>
                        <input id="fullName" type="text" name="fullName" value={form.values.fullName} onChange={form.handleChange} onBlur={form.handleBlur}/>
                        <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="email">E-mail</label>
                        <input id= "email" type="email" name="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur}/>
                        <small>{getErrorMessage('email', form.errors.fullName)}</small>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="cpf">CPF</label>
                        <input id="cpf" type="text" name="cpf" value={form.values.cpf} onChange={form.handleChange} onBlur={form.handleBlur}/>
                        <small>{getErrorMessage('cpf', form.errors.fullName)}</small>
                    </InputGroup>
                </Row>
                <h3 className="margin-top">Dados de entrega - conteudo digital</h3>
                <Row>
                    <InputGroup>
                        <label htmlFor="deliveryEmail">E-mail</label>
                        <input id="deliveryEmail" type="email" name="deliveryEmail" value={form.values.deliveryEmail} onChange={form.handleChange} onBlur={form.handleBlur}/>
                        <small>{getErrorMessage('deliveryEmail', form.errors.fullName)}</small>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
                        <input id="confirmDeliveryEmail" type="email" name="confirmDeliveryEmail" value={form.values.confirmDeliveryEmail} onChange={form.handleChange} onBlur={form.handleBlur}/>
                        <small>{getErrorMessage('confirmDeliveryEmail', form.errors.fullName)}</small>
                    </InputGroup>
                </Row>
                </>
                </Card>
                <Card title="Pagamento">
                    <>
                        <TabButton isActive={!payWithCard} onClick={() => setpayWithCard(false)}>
                            <img src={boleto} alt="Boleto" />
                            Boleto bancário
                        </TabButton>
                        <TabButton isActive={payWithCard} onClick={() => setpayWithCard(true)}>
                            <img src={cartao} alt="Cartão de crédito" />
                            Cartão de crédito
                        </TabButton>
                        <div className="margin-top">
                        {payWithCard ? (
                            <>
                                <Row>
                                    <InputGroup>
                                        <label htmlFor="cardOwner">
                                            Nome do titular do cartão
                                        </label>
                                        <input id="cardOwner" type="text" name="cardOwner" value={form.values.cardOwner} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                        <small>{getErrorMessage('cardOwner', form.errors.fullName)}</small>
                                    </InputGroup>
                                    <InputGroup>
                                        <label htmlFor="cpfCardOwner">
                                            CPF do titular do cartão
                                        </label>
                                        <input id="cpfCardOwner" type="text" name="cpfCardOwner" value={form.values.cpfCardOwner} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                        <small>{getErrorMessage('cpfCardOwner', form.errors.fullName)}</small>
                                    </InputGroup>
                                </Row>
                                <Row marginTop='24px'>
                                    <InputGroup>
                                        <label htmlFor="cardDisplayName">
                                            Nome no cartão
                                        </label>
                                        <input id="cardDisplayName" type="text" name="cardDisplayName" value={form.values.cardDisplayName} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                        <small>{getErrorMessage('cardDisplayName', form.errors.fullName)}</small>
                                    </InputGroup>
                                    <InputGroup>
                                        <label htmlFor="cardNumber">
                                            Número do cartão
                                        </label>
                                        <input id="cardNumber" type="text" name="cardNumber" value={form.values.cardNumber} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                        <small>{getErrorMessage('cardNumber', form.errors.fullName)}</small>
                                    </InputGroup>
                                    <InputGroup maxWidth='123px'>
                                        <label htmlFor="expiresMonth">
                                            Mês do vencimento
                                        </label>
                                        <input id="expiresMonth" type="text" name="expiresMonth" value={form.values.expiresMonth} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                        <small>{getErrorMessage('expiresMonth', form.errors.fullName)}</small>
                                    </InputGroup>
                                    <InputGroup maxWidth='123px'>
                                        <label htmlFor="expiresYear">
                                            Ano do vencimento
                                        </label>
                                        <input id="expiresYear" type="text" name="expiresYear" value={form.values.expiresYear} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                        <small>{getErrorMessage('expiresYear', form.errors.fullName)}</small>
                                    </InputGroup>
                                    <InputGroup maxWidth='48px'>
                                        <label htmlFor="cardCode">
                                            CVV
                                        </label>
                                        <input id="cardCode" type="text" name="cardCode" value={form.values.cardCode} onChange={form.handleChange} onBlur={form.handleBlur}/>
                                        <small>{getErrorMessage('cardCode', form.errors.fullName)}</small>
                                    </InputGroup>
                                </Row>
                                <Row marginTop='24px'>
                                    <InputGroup maxWidth='150px'>
                                        <label htmlFor="installments">Parcelamento</label>
                                        <select name="installments" id="installments" value={form.values.installments} onChange={form.handleChange} onBlur={form.handleBlur}>
                                            <option value="">1x de R$ 200,00</option>
                                            <option value="">2x de R$ 200,00</option>
                                            <option value="">3x de R$ 200,00</option>
                                        </select>
                                        <small>{getErrorMessage('installments', form.errors.fullName)}</small>
                                    </InputGroup>
                                </Row>
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
                <Button type="button" title="Clique aqui para finalizar a compras">
                    Finalizar compra
                </Button>
        </form>
    )
}

export default Checkout