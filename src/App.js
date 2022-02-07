import styled, { keyframes } from "styled-components";

const P = styled.p`
  font-size: 24px;
  color: blue;
  letter-spacing: 3px;
`

const Content = styled.div`
  padding: 20px 25px;
`

const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'red' };
  color: ${ props => props.primary ? 'white' : 'green' }
  padding: 10px 15px;
  border: solid 2px blue;
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow: 1px 5px 5px rgb(0, 0, 0, 0.3);
  }

  &.secondary {
    background-color: green;
    border: solid 2px green;
  }
`

const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`

const Link = ({className, ...props}) => {
  return <a className={className} {...props}></a>
}

const StyledLink = styled(Link)`
  color: blue;
`

const Input = styled.input.attrs( props => ({
  type: 'text',
  color: props.color || ' blue'
}))`
  font-size: 20px;
  border: 1px solid blue;
  color: ${props => props.color};
  outline: none;
`

const Password = styled(Input).attrs({
  type: 'password'
})``

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const SpinComponent = styled.div`
  animation: ${spin} 2s linear infinite;
  display: inline-block;
`

const App = () => {
  return (
    <Content>
      <P>Hello World</P>
      <Button>Click me!</Button>
      <Button primary className="secondary">Click me!</Button>
      <BlockButton primary as="a" href="#">Click me!</BlockButton>
      <BlockButton primary>Click me!</BlockButton>
      <StyledLink>A styled link</StyledLink>
      <Input  color="blue"/>
      <Password />
      <br/>
      <SpinComponent>A Spin div</SpinComponent>
    </Content>
  );
}

export default App;
