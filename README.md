# Word-Scramble

This is a game which involves the scattering of meaningful words and giving of tips to help players reach the original word.

##WHAT I LEARNT
It was definitely fun building this project,and i learnt an algorithm known as Fisher yates or Knull shuffle

````function fisherYatesShuffle(array){
for(let i = array.length - 1,i<0,i--){
const j = Math.floor(Math.random()\*(i+1))

    [array[i],array[j]] = [array[j],array[i]]
    }
    return array

}

const arr = [1,2,3,4,5]```

The algorithm ensures a uniformly random shuffle in O(n) time.

##TECHNOLOGIES USED
-HTML5
-Vanilla Css
-pure javascript
````
