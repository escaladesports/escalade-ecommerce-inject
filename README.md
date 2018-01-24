# escalade-ecommerce-inject

Client side JavaScript utilities to add Escalade's ecomm system to any website.

## Getting started

Insert the JavaScript file before your closing `</body>` tag:

```html
<script src="https://deligation--zygote.netlify.com/zygote-v1.js"></script>
<script src="https://escalade-ecommerce-inject.netlify.com/v1.js"></script>
<script>
	new EscaEcomm({
		siteId: 'your-site-id'
	})
</script>
```

Optionally, add the CSS file before your closing `</head>` tag for the basic styles:

```html
<link type="text/css" rel="stylesheet" href="https://deligation--zygote.netlify.com/zygote-v1.css">
```

## Usage

### "Add to Cart" Buttons

```html
<button
	data-esca-add-to-cart
	data-id="as701r10"
	data-name="React One Pro"
	data-price="259.99"
	data-img="/img/product/thumbnail.jpg"
	data-url="/product/as701r10"
	data-desc="This is the product description."
	data-open-cart
	>
	Add to Cart
</button>
```

### Loading Animations/Elements

To show an element only when stock & price is being fetched, add the `data-esca-is-loading` attribute along with the product ID.

```html
<div data-esca-is-loading="ID123" style="display:none">Loading...</div>
```

### Show When Available

To show an element only if the product is in stock, add the `data-esca-is-available` attribute along with the product ID.

Wrap this around the add to cart button to make sure it only shows if the product is in stock.

```html
<div data-esca-is-available="ID123" style="display:none">
	<button
		data-esca-add-to-cart
		data-id="as701r10"
		data-name="React One Pro"
		data-price="259.99"
		data-img="/img/product/thumbnail.jpg"
		data-url="/product/as701r10"
		data-desc="This is the product description."
		data-open-cart
		>
		Add to Cart
	</button>
</div>
```