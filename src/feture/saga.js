import {call, put, takeEvery} from 'redux-saga/effects';
import {getUserFetch} from './user'

function* workGetCatsFetch(){

    const user = yield call(()=>{
          fetch('https://jsonplaceholder.typicode.com/posts');
          const formatedUser = user.json();
           put(getUserFetch(formatedUser))

    })
}

function* userSaga(){

 yield takeEvery('users/getUserFetch',workGetCatsFetch)

}

export default userSaga;