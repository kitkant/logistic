import styled from '@emotion/styled'
import Image from 'next/image'

interface IProps {
	icon: string
	text: string
}

const Card = ({ icon, text }: IProps) => {
	return (
		<Wrapper>
			<Image width={60} height={60} src={icon} alt='icon' />
			<Text>{text}</Text>
		</Wrapper>
	)
}

export default Card

const Wrapper = styled.div`
	display: flex;
`
const Text = styled.p`
	font-size: 18px;
	white-space: pre;
	line-height: 30px;
`
