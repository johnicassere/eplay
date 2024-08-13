import { useState } from "react"
import Section from "../section"
import { GallaryItem} from '../../pages/Home'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'
import { Item, Items, Action, Modal, ModalContent } from './styles'


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
                    <Items>
                        {items.map((media, index) => (
                        <Item key={media.url} onClick={() => {
                            setMOdal({
                                isVisible: true,
                                type: media.type,
                                url: media.url
                            })
                        }}>
                            <img src={getMediaCover(media)} 
                            alt={`Media ${index + 1} de ${name}`} />
                            <Action>
                                <img src={getMediaIcon(media)} alt="Click para maximar a mídia" />
                            </Action>
                        </Item>
                        ))}
                       
                    </Items>
                </Section>
                <Modal className={modal.isVisible ? 'visivel' : ''}>
                    <ModalContent className="container">
                        <header>
                            <h4>{name}</h4>
                            <img src={fechar} alt="ìcone de fechar" onClick={() => {
                                    closeModal()
                                }}
                            />
                        </header>
                        {modal.type === 'image' ? (
                            <img src={modal.url} />

                        ) : (
                            <iframe frameBorder={0} src={modal.url}/>
                        )}
                    </ModalContent>
                    <div
                    onClick={() => {
                        closeModal()
                    }}
                     className="overlay"
                    ></div>
                </Modal>
       
       </>
    )
}

export default Gallery