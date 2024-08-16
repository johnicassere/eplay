import { useState } from "react"
import Section from "../section"


import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import closeIcon from '../../assets/images/fechar.png'
import * as S from './styles'


type Props = {
    defaultCover: string
    name: string
    items: GallaryItem[]
}

interface ModalState extends GallaryItem {
    isVisible: boolean
}


const Gallery = ( {defaultCover, name, items }: Props) => {
    const [modal, setMOdal] = useState<ModalState>({
        isVisible: false,
        type: 'image',
        url: ''
    })
    

    const getMediaCover = (item: GallaryItem) => {
        if(item.type === 'image') return item.url
        return defaultCover
    }

    const getMediaIcon = (item: GallaryItem) => {
        if(item.type === 'image') return zoom
        return play
    }

    const closeModal = () => {
        setMOdal({
            isVisible: false,
            type: 'image',
            url: ''
        })
    }

    return (
       <>
        <Section title='Galeria' background='black'>
                    <S.Items>
                        {items.map((media, index) => (
                        <S.Item key={media.url} onClick={() => {
                            setMOdal({
                                isVisible: true,
                                type: media.type,
                                url: media.url
                            })
                        }}>
                            <img src={getMediaCover(media)} 
                            alt={`Media ${index + 1} de ${name}`} />
                            <S.Action>
                                <img src={getMediaIcon(media)} alt="Click para maximar a mídia" />
                            </S.Action>
                        </S.Item>
                        ))}
                       
                    </S.Items>
                </Section>
                <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
                    <S.ModalContent className="container">
                        <header>
                            <h4>{name}</h4>
                            <img src={closeIcon} alt="ìcone de fechar" onClick={() => {
                                    closeModal()
                                }}
                            />
                        </header>
                        {modal.type === 'image' ? (
                            <img src={modal.url} />

                        ) : (
                            <iframe frameBorder={0} src={modal.url}/>
                        )}
                    </S.ModalContent>
                    <div
                    onClick={() => {
                        closeModal()
                    }}
                     className="overlay"
                    ></div>
                </S.Modal>
       
       </>
    )
}

export default Gallery