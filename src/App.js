import React, { useState } from 'react'
import lights from "./Im/lights.png"
import './AuthPage.css'
import logo from "./Im/logo.png"
import Group from "./Im/authBeautyImage.png"



function App(){
  
  const [person, setPerson] = useState(
    { lastName:"",
     firstName:" ",
     patronym:" ",
      hisDate: {
        day: " ",
        month: " ",
        year:  " ",
      }
}
)

function Clicker() {
  console.log(person)
  
}


  return (
      <div>
        
        <div className="authpage-wrapper">
          <div className="lights-image">
            <img alt="lights" src={lights}/>
          </div>

         {/*Cиний экран*/} 
            <div className="authpage-inner-wrapper">
              <div className="beauty-image"></div>
              <div className="form">
                <div className="fstr">
                  <h1>Фамилия</h1><form><input type="text" value={person.lastName } 
                  onChange={e => setPerson({...person, lastName: e.target.value})} 
                  /></form>
                </div>
                <div className="sstr">
                  <h1>Имя</h1><form >
                    <input type="text" value={person.firstName }
                  onChange={e => setPerson({...person, firstName: e.target.value})} />
                  </form>
                  </div>
                <div className="tstr"> 
                  <h1>Отчество</h1><form><input type="text" value={person.patronym }
                  onChange={e => setPerson({...person, patronym: e.target.value})} /></form>
                  </div>


                <div className="fostr">
                  <h1>Дата рождения</h1>
                
                  
                    <div className="Date"> 
                     

                  <select className="Days"
                   onChange={e => setPerson({...person, day: e.target.value})} >
        
                        <option>День</option>
                        <option>1</option><option>2</option>
                        <option>3</option><option>4</option>
                        <option>5</option><option>6</option>
                        <option>7</option><option>8</option>
                        <option>9</option><option>10</option>
                        <option>11</option><option>12</option>
                        <option>13</option><option>14</option>
                        <option>15</option><option>16</option>
                        <option>17</option><option>18</option>
                        <option>19</option><option>20</option>
                        <option>21</option><option>22</option>
                        <option>23</option><option>24</option>
                        <option>25</option><option>26</option>
                        <option>27</option><option>28</option>
                        <option>29</option><option>30</option>
                        <option>31</option>
                    </select>
                  <select className="Months" 
                  onChange={e => setPerson({...person, month: e.target.value})} >
                        <option>Месяц</option>
                        <option>Январь</option><option>Февраль</option>
                        <option>Март</option><option>Апрель</option>
                        <option>Май</option><option>Июнь</option>
                        <option>Июль</option><option>Август</option>
                        <option>Сентябрь</option><option>Октябрь</option>
                        <option>Ноябрь</option><option>Декабрь</option>
                    </select>
                    
                    
                    <select  className="Years" 
                    onChange={e => setPerson({...person, year: e.target.value}) } >
                        <option>Год</option>
                        <option>1900</option><option>1901</option><option>1902</option><option>1903</option><option>1904</option><option>1905</option>
                        <option>1906</option><option>1907</option><option>1908</option><option>1909</option><option>1910</option><option>1911</option>
                        <option>1912</option><option>1913</option><option>1914</option><option>1915</option><option>1916</option><option>1917</option>
                        <option>1918</option><option>1919</option><option>1920</option><option>1921</option><option>1922</option><option>1923</option>
                    </select>    
                          </div>
                           
                </div>
                <div className='place'>
                  <button onClick={Clicker}>Продолжить</button>                               
                </div>
              </div>
    {/*Blue*/}<div className="authpage-inner-info-wrapper"></div>
              <div className="authpage-inner-info">
                  <div className=".authpage-inner-info > div"></div>
                  <div className="logo-image-wrapper">
                    <img  alt="logo" className="logo-image-wrapper" src={logo}/></div>
                  <div className="logo-image-wrapper img "></div>
                  <div className="welcome-title-wrapper"><h1>Регистрация</h1></div>
                   
              </div>
              <div className="auth-form-wrapper"></div>
              
              
    {/*Light*/}<div className="authpage-inner-form-wrapper"></div>              
               <div className="main-text-wrapper"><h1>узнать о сервисе подробнее</h1></div>                  
               


              <div className="Group">
                <img alt="Group" width="560px" src={Group}/>
              </div>  
            </div>
        </div>
      </div>
  )
  }
export default App

