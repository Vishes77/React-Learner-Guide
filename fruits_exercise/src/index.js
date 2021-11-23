import foods  from "./fruits";
import { choice,remove } from "./helpers";


let fruit = choice(foods);


console.log(`Our Random fruit is ${fruit}`);

let remaining = remove(foods,fruit);

console.log(`Now we are left with ${remaining} fruits`)
