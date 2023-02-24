<script>

</script>

<button type="button" id="css" class="css">
</button>

<button type="button" id="scss" class="scss">
</button>

<button type="button" id="tailwind" class="w-32 h-10 bg-blue-500 text-white font-semibold rounded-md text-base hover:bg-lightblue-500">
</button>

<style lang="scss">
.css {
    width: 100px;
  height: 40px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.css:hover {
background-color: lightblue;
}

$primary-color: blue;
$primary-color-hover: lightblue;

.scss {
  width: 100px;
  height: 40px;
  background-color: $primary-color;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: $primary-color-hover;
  }
}


</style>