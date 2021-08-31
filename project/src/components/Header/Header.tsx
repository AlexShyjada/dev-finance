import logo from '../../assets/logo.svg'
import {Container} from './styles'
import {Content} from './styles'
import {Buttons} from './styles'

export default function index() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo Dev.Finance"/>

        <Buttons>
          <label className="switchWrapper">
            <span className="textSwitch">
              Ativar Dark Mode
            </span>
            <div className="switchWrapper">
              <input className="checkBox" type="checkbox"/>
              <span className="switchButton light"></span>
            </div>
          </label>
          
          <button type="button">
            + Nova Transação
          </button>
        </Buttons>
      </Content>
    </Container>
  )
}
