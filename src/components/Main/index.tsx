import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src='/img/icon-192.png' alt='Imagem de um átomo e "React Avançado" escrito ao lado.'/>
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration src='/img/hero-illustration.svg' alt='Um dev de frente para tela com código' />
  </S.Wrapper>
)

export default Main
