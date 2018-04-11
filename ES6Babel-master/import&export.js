//person.js

const person = {
  name: 'Max'
}
export default person 


//utility.js

export const clean = () => {...}
export const baseData = 10;

//app.js
import person from './person.js'
import prs from './person'

import {baseData} from './utility.js'
import {clean} from './utility.js'

//default export - exports everything
//named export exports specific import { smth } from './xxxxxxx.js'

//import as alias import { smth as Smth } from './utlity.js'
//import * as bundledc from './utlity.js' 
