//namespacing and module building

var ray = (function () {
return {
speak: function () {
console.log('hello');
}
}
})();

//html page
<script>
ray.speak();
</script>
