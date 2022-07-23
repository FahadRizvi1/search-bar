import {faker} from '@faker-js/faker';
import '../p2.scss';

const P2 = () => {

    const cImage = faker.image.fashion(280,250);
  return (

    <div className='container'>
        <div className='card'>
            <img src={cImage} alt=''></img>
        </div>        
    </div>
  )
}

export default P2
