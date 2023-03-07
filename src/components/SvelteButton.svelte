<script>

</script>

<button type="button" id="css" class="css">
  CSS
</button>

<button type="button" id="scss" class="scss">
  Sass
</button>

<button type="button" id="tailwind" class="w-24 h-10 bg-[blue] text-white rounded-md text-base hover:bg-[lightblue]">
  Tailwind
</button>

<style lang="scss">

/* 
CSS
*/
.css {
  width: 96px;
  height: 40px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
}

.css:hover {
background-color: lightblue;
}

/* 
SCSS
*/

$primary-color: blue;
$primary-color-hover: lightblue;

.scss {
  width: 96px;
  height: 40px;
  background-color: $primary-color;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;

  &:hover {
    background-color: $primary-color-hover;
  }
}


</style>