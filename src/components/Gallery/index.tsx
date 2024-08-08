import { useState } from "react"
import Section from "../section"
import { GallaryItem} from '../../pages/Home'
import { Item, Items, Action, Modal, ModalContent } from './styles'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'


const mock: GallaryItem[]  = [
    {
        type: 'image',
        url: spiderman
    },
    {
        type: 'image',
        url: hogwarts
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=DrrfJa8CkejEPESA'
    }
]

type Props = {
    defaultCover: string
    name: string
}

interface ModalState extends GallaryItem {
    isVisible: boolean
}


const Gallery = ( {defaultCover, name }: Props) => {
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
                        {mock.map((media, index) => (
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