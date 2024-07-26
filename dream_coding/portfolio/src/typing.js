'use strict';

new TypeIt(".home__title--strong", {
  speed: 100,
  loop: true
})
.type("youtuber", {delay:3000})
.delete(8, {delay: 500})
.type("developer", {delay:3000})
.move(-9, {delay: 500})
.type("the most handsome ")
.move(9, {delay: 3000})
.delete()
.go();