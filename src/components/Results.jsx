import {faker} from '@faker-js/faker';
import '../results.scss'


const Results = () => {

  let image1 = faker.image.fashion(150,200,true);
  let image2 = faker.image.fashion(150,200,true);
  let image3 = faker.image.fashion(150,200,true);
  let image4 = faker.image.fashion(150,200,true);
  let name1 = faker.commerce.product(true);
  let name2 = faker.commerce.product(true);
  let name3 = faker.commerce.product(true);
  let name4 = faker.commerce.product(true);


  return (
    <div className="wrapper">
      <section className='title'> Latest Trends</section>
        <div className='dataResult'>
          <section className='imgs'>
          <img src={image1} alt=""></img>
          <b >{name1}</b>
          </section>
          <section className='imgs'>
          <img src={image2} alt=""></img>
          <b >{name2}</b>
          </section>
          <section className='imgs'>
          <img src={image3} alt=""></img>
          <b>{name3}</b>
          </section>
          <section className='imgs'>
          <img src={image4} alt=""></img>
          <b> {name4}</b>
          </section>
        </div>
          
        <div className='title'>Popular Searches</div>
        <div className='texts'>
          Trousers
        </div>
        <div className='texts'>
          T-Shirt
        </div>
        <div className='texts'>
          Jeans
        </div>
        <div className='texts'>
          Shorts
        </div>  
  
        
    </div>
  )
    
}

export default Results
