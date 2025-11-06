import Arrow from '@/app/UI/Icons/Arrow'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
	wayFirst: string
	waySecond: string
	name: string
	phone: string
	message: string
}

const FormFraternalBond = () => {
	const {
		register,
		control,
		getValues,
		handleSubmit,
		setValue,
		setError,
		watch,
		formState: { errors },
	} = useForm<Inputs>()

	const validateForm = (formData: Inputs) => {
		const errors: Record<string, string> = {}

		if (!formData.name) {
			errors.name = 'Введите имя'
		} else if (!/^[\p{L}\s'\-\.]+$/u.test(formData.name)) {
			errors.name = 'Недопустимые символы в имени'
		} else if (formData.name.length < 2 || formData.name.length > 50) {
			errors.name = 'Имя должно быть от 2 до 50 символов'
		}

		if (!formData.wayFirst) {
			errors.wayFirst = 'Введите пункт отправки'
		} else if (!/^[\p{L}\s'\.]+$/u.test(formData.wayFirst)) {
			errors.wayFirst = 'Некорректные символы'
		} else if (formData.wayFirst.length < 3 || formData.wayFirst.length > 25) {
			errors.wayFirst = 'Не допустимый город'
		}
		if (!formData.waySecond) {
			errors.waySecond = 'Введите пункт прибытия'
		} else if (!/^[\p{L}\s'\.]+$/u.test(formData.waySecond)) {
			errors.waySecond = 'Некорректные символы'
		} else if (
			formData.waySecond.length < 3 ||
			formData.waySecond.length > 25
		) {
			errors.waySecond = 'Не допустимый город'
		}

		if (!formData.phone) {
			errors.phone = 'Введите номер'
		} else if (/^[\d\s\(\)\+\-]+$/.test(formData.phone)) {
			errors.phone = 'Некорректные символы'
		} else if (
			formData.waySecond.length < 3 ||
			formData.waySecond.length > 12
		) {
			errors.phone = 'Не допустимый номер'
		}

		setCustomErrors(errors)
		return Object.keys(errors).length === 0
	}

	const [customErrors, setCustomErrors] = useState<Record<string, string>>({})
	const [showErrors, setShowErrors] = useState(false)

	const onSubmit: SubmitHandler<Inputs> = data => {
		setShowErrors(true)
		const isValid = validateForm(data)

		if (isValid) console.log(data)
	}

	return (
		<Wrapper>
			<div className='container'>
				<Container>
					<FormContentContainer>
						<Title>
							<span>Узнайте</span> стоимость и сроки доставки
						</Title>
						<SubTitle>
							Укажите детали перевозки и получите подробный расчёт от сотрудника
							отдела логистики.
						</SubTitle>
						<Form>
							<InputContainer>
								<WayContainer>
									<Label>
										<Controller
											control={control}
											name='wayFirst'
											defaultValue=''
											render={({ field: { onChange, value } }) => (
												<Input
													onClick={() =>
														customErrors &&
														customErrors.wayFirst &&
														setCustomErrors({ ...customErrors, wayFirst: '' })
													}
													value={value ?? ''}
													onChange={e => onChange(e.target.value)}
													type='text'
													placeholder='Москва'
												/>
											)}
										/>
										<span>Откуда</span>
										<Error style={{ color: 'red' }}>
											{customErrors.wayFirst}
										</Error>
									</Label>
									<SwapBtn
										onClick={() => {
											const wayFirst = getValues('wayFirst')
											const waySecond = getValues('waySecond')
											setValue('wayFirst', waySecond, {
												shouldValidate: true,
												shouldDirty: true,
											})

											setValue('waySecond', wayFirst, {
												shouldValidate: true,
												shouldDirty: true,
											})

											setCustomErrors({
												...customErrors,
												wayFirst: '',
												waySecond: '',
											})
										}}
										type='button'
									>
										<Image
											width={27}
											height={10}
											src={'/form/Arrow.svg'}
											alt='arrow'
										/>
										<Image
											width={27}
											height={10}
											src={'/form/Arrow.svg'}
											alt='arrow'
										/>
									</SwapBtn>
									<Label>
										<Controller
											control={control}
											name='waySecond'
											defaultValue=''
											render={({ field: { onChange, onBlur, value, ref } }) => (
												<Input
													onClick={() =>
														customErrors &&
														customErrors.waySecond &&
														setCustomErrors({ ...customErrors, waySecond: '' })
													}
													value={value ?? ''}
													onChange={e => onChange(e.target.value)}
													type='text'
													placeholder='Казань'
												/>
											)}
										/>

										<span>Куда</span>
										<Error style={{ color: 'red' }}>
											{customErrors.waySecond}
										</Error>
									</Label>
								</WayContainer>
								<ContactContainer>
									<InputErrorContainer>
										<Input
											onClick={() =>
												customErrors &&
												customErrors.name &&
												setCustomErrors({ ...customErrors, name: '' })
											}
											{...register('name')}
											type='text'
											placeholder='Контактное лицо'
										/>
										<Error className='error' style={{ color: 'red' }}>{customErrors.name}</Error>
									</InputErrorContainer>

									<InputErrorContainer>
										<Input
											onClick={() =>
												customErrors &&
												customErrors.phone &&
												setCustomErrors({ ...customErrors, phone: '' })
											}
											{...register('phone')}
											type='tel'
											placeholder='Телефон'
										/>
										<Error className='error' style={{ color: 'red' }}>{customErrors.phone}</Error>
									</InputErrorContainer>
								</ContactContainer>
								<TextArea
									{...register('message')}
									rows={6}
									cols={50}
									placeholder='Опишите, что требуется перевезти'
								/>
							</InputContainer>
							<Text>
								Отправляя свои данные, вы автоматически соглашаетесь с{' '}
								<Link href={'#'}>политикой конфиденциальности</Link>
							</Text>
							<Btn type='submit' onClick={handleSubmit(onSubmit)}>
								Получить расчет
								<BtnCircle>
									<Arrow />
								</BtnCircle>
							</Btn>
						</Form>
					</FormContentContainer>
					<ImageContainer>
						<Image
							sizes='(max-width: 640px) 100vw, (max-width: 768px) 96vw, (max-width: 1024px) 94vw, 1200px'
							src='/formImg.png'
							fill={true}
							alt='form image'
						/>
					</ImageContainer>
				</Container>
			</div>
		</Wrapper>
	)
}

export default FormFraternalBond

const Wrapper = styled.section`
	width: 100%;
	display: flex;
	margin-top: 170px;
	justify-content: center;
	@media (max-width: 1600px) {
		& .container {
			max-width: 100%;
			padding: 0 40px;
			display: flex;
			justify-content: center;
		}
	}
	@media(max-width: 768px){
		& .container{
			padding: 0 16px;
		}
	}
`
const Container = styled.div`
	background-color: #001e3d;
	border-radius: 30px;
	padding: 60px 80px 41px 50px;
	margin-top: 170px;
	display: flex;
	width: 100%;
	justify-content: space-between;
	@media (max-width: 1600px) {
		padding-right: 60px;
		width: fit-content;
		padding-right: 50px;
	}
		@media(max-width: 768px){
			padding: 60px 18px 54px 16px;
		}
		@media(max-width: 440px){
			padding: 60px 7px 54px 16px;
		
		}
`
const FormContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 50px;
	@media(max-width: 880px){
		width: 100%;
	}
	@media(max-width: 768px){
		gap: 40px;
	}
`
const Title = styled.h3`
	color: #ffd600;
	font-size: 50px;
	font-weight: 600;
	line-height: 70px;
	max-width: 480px;
	& span {
		color: #fff;
		font-weight: 400;
	}
		@media(max-width: 768px){
			font-size: 40px;
		}
`
const SubTitle = styled.p`
	font-size: 20px;
	max-width: 550px;
	color: #ffffff;
	line-height: 40px;
`

const ImageContainer = styled.div`
	position: relative;
	width: 560px;
	height: 762px;
	border-radius: 30px;
	& img {
		object-fit: cover;
		object-position: center;
		border-radius: 30px;
	}
	@media (max-width: 1600px) {
		display: none;
	}
`
const Input = styled.input`
	background-color: transparent;
	border-radius: 10px;
	border: 1px solid #fffbe7;
	color: #fffbe7;

	width: 100%;
	max-width: 300px;
	height: 60px;
	padding-left: 20px;
	font-size: 18px;
`
const Form = styled.form`
	width: 690px;
	display: flex;
	flex-direction: column;
	@media(max-width: 880px){
		width: 100%;
	}
	@media(max-width: 768px){
		margin-top: 15px;
	}
`
const WayContainer = styled.div`
	display: flex;
	gap: 15px;
	@media(max-width: 880px){
		flex-direction: column;
		gap: 60px;
		position: relative;
		width: fit-content;
	}
`
const ContactContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	@media(max-width: 880px){
		flex-direction: column;
		gap: 50px;
		width: fit-content;
	}
`
const SwapBtn = styled.button`
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 5px;
	align-items: center;
	justify-content: center;
	width: 60px;
	height: 60px;
	border: none;
	cursor: pointer;
	background-color: #ffd600;
	& :hover {
		opacity: 0.8;
	}
	& img:last-of-type {
		transform: rotate(180deg);
	}
		@media (max-width: 880px){
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: calc(100% + 9px);

		}
`
const Label = styled.label`
	max-width: 300px;
	width: 100%;
	& span {
		padding-left: 20px;
		line-height: 20px;
		font-size: 14px;
		font-weight: 300;
		color: #fff;
	}
	@media(max-width: 880px){
		position: relative;
		& span{
			position: absolute;
			left: 0;
			top: calc(100% + 5px);
		}
			& input{
				min-width: 300px;
			}
	}
`
const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	@media(max-width: 880px){
		gap: 60px;
	}
`
const TextArea = styled.textarea`
	background-color: transparent;
	border-radius: 10px;
	border: 1px solid #fffbe7;
	color: #fffbe7;
	padding-left: 20px;
	padding-top: 20px;
	font-size: 18px;
	resize: none;
	@media(max-width: 440px){
		max-width: 370px;
	}
`
const Text = styled.p`
	padding-top: 30px;
	font-weight: 300;
	font-size: 14px;
	line-height: 30px;
	color: #fff;
	& a {
		color: #fff;
	}
	@media(max-width: 768px){
		max-width: 320px;
	}
`
const Btn = styled.button`
	align-self: end;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 40px;
	background-color: #ffd600;
	padding: 7px 6px 8px 23px;
	border-radius: 100px;
	line-height: 30px;
	font-size: 18px;
	font-weight: 500;
	color: #001e3d;
	border: none;
	cursor: pointer;
	width: 230px;
	&:hover {
		opacity: 0.8;
	}
`
const BtnCircle = styled.span`
	width: 45px;
	height: 45px;
	background-color: #001e3d;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	transform: rotate(60deg);
	& svg {
		scale: 0.8;
	}
`
const Error = styled.p`
	color: red;
	font-size: 18px;
	padding-left: 20px;
	@media(max-width: 880px){
		position: absolute;
		left: 0;
		top: calc(100% + 25px);
	}
`
const InputErrorContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	max-width: 300px;
	width: 100%;
	min-width: 300px;
	position: relative;

	& .error{
		top: calc(100% + 5px);
	}
`
