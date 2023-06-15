/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form'
import Button from './components/commonComponents/button/Button'
import UserInfo from './components/userInfo/UserInfo'
import Input from './components/commonComponents/input/Input'
import s from './App.module.css'

function App() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className={s.app}>
      <div className={s.wrapper}>
        <div className={s.content}>
          <UserInfo />
          <form className={s.mainForm} onSubmit={handleSubmit(onSubmit)}>
            <Input
              width="big"
              register={register}
              label="Номер телефона"
              htmlFor="phone-number"
              placeholder="+7 999 999-99-99"
              id="phone-number"
              name="phone-number"
            />
            <Input
              width="big"
              register={register}
              label="Email"
              htmlFor="email"
              placeholder="tim.jennings@example.com"
              id="email"
              name="email"
            />
            <div className={s.buttons}>
              <Button type="submit" mode="next" title="Начать" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
