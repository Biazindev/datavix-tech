import whats from '../../assets/whats.png'
import { Whats } from './styles'

const WhatsAppLink = () => {
  const phoneNumber = '554499991803'
  const message = 'Olá, gostaria de saber mais sobre sistemas DataVix.'

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Whats>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <img src={whats} alt="" />
      </a>
    </Whats>
  )
}

export default WhatsAppLink