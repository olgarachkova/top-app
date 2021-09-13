import React from "react";

import { Htag, Button, P, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout"

function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h2'>ssnm</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P size='s'>
        Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
      </P>
      <Tag size='s' color='ghost'>Photoshop</Tag>
      <Rating rating={4} isEditable={true} />
    </>
  );
}

export default withLayout(Home);