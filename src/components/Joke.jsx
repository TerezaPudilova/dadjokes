import React, {useState} from 'react';

const Joke = (props) => {
  const userId = props.userId
  const [btnUp, setbtnUp] = useState(props.likes);
  const [btnDown, setbtnDown] = useState(props.dislikes);

  const handlebtnUp = () => {
    setbtnUp(btnUp + 1);
  };

  const handlebtnDown = () => {
    setbtnDown(btnDown + 1);
  };

  return (
    <>
      <div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img className="user-avatar" src="assets/img/user01.png" />
  <p className="user-name">{props.userName}</p>
            </div>

            <p className="joke__text">
             {props.text}
            </p>
          </div>
          <div className="joke__likes">
            <button
              id="btn-up"
              className="btn-like btn-like--up"
              onClick={handlebtnUp}
            ></button>
            <span id="likes-up" className="likes-count likes-count--up">
              {btnUp}
            </span>
            <button
              id="btn-down"
              className="btn-like btn-like--down"
              onClick={handlebtnDown}
            ></button>
            <span id="likes-down" className="likes-count likes-count--down">
              {btnDown}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Joke