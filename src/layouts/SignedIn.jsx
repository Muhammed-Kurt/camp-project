import React from 'react'
import { Dropdown,Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://media.licdn.com/dms/image/D4D03AQHcz5GY4ngKAw/profile-displayphoto-shrink_200_200/0/1675614938715?e=2147483647&v=beta&t=MY9hqjmXie8GpmTvNazLipensJ_TWTijLFEb2psKgMw"/>
            <Dropdown pointing="top left" text="Muhammed" >
              <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item text="Çıkış Yap" icon="sign-out" onClick={signOut}/>
              </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
