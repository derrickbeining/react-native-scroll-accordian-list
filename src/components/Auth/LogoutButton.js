import React from 'react';
import firebase from 'firebase';
import {Card, CardSection, ButtonDefault} from '../../components';

const LogoutButton = () => {
  return (
    <Card>
      <CardSection>
        <ButtonDefault
          content="Logout"
          onPress={() => firebase.auth().signOut()}
        />
     </CardSection>
   </Card>
  )
}

export default LogoutButton;
