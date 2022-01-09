import "./productList.css"
import Product from "../product/Product"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
        <h1 className="pl-title">Create and Inspire</h1>
        <p className="pl-desc">
        Senior Full Stack and Flutter Mobile App Developer,
         having 4+ Years of experience in enterprise 
         application development. Well-versed in 
         cloud technologies including .Net C#, 
         dotNetCore, Microservices, WebAPI, 
         HTML5, Flutter, PHP, NodeJS, 
         JavaScript, jQuery, Bootstrap, CSS,
          Database Design, MySQL, MSSQL, ReactJS, 
          AWS Cloud, Docker, CI/CD, Chatbots, OOPs,
           SOLID Principles, Strong background in 
           project management, agile development, 
           team handling and customer relations.
        </p>
            </div>
            <div className="pl-list">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
            
        </div>
    )
}

export default ProductList
