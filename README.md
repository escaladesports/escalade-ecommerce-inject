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

To create an active add to cart button, pass along the following data attributes:

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

### Price

To display pricing, add the `data-esca-price` attribute along with the product ID.

```html
<span data-esca-price="ID123"></span>
```

### Loading Animations/Elements

To show an element only when stock & price is being fetched, add the `data-esca-is-loading` attribute along with the product ID.

```html
<div data-esca-is-loading="ID123" style="display:none">
	Loading...
</div>
```

### Show When Available

To show an element only if the product is in stock, add the `data-esca-is-available` attribute along with the product ID.

Wrap this around the add to cart button to make sure it only shows if the product is in stock.

```html
<div data-esca-is-available="ID123" style="display:none">
	<button
		data-esca-add-to-cart
		data-id="ID123"
		data-name="My Product"
		data-img="/img/product/thumbnail.jpg"
		data-url="/product/id123"
		data-desc="This is the product description."
		data-open-cart
		>
		Add to Cart
	</button>
</div>
```

### Show When Not Available

To show an element only if the product is out of stock, add the `data-esca-is-not-available` attribute along with the product ID.

Wrap your out of stock message in this tag to only show the message when the product is out of stock.

```html
<div data-esca-is-not-available="ID123" style="display:none">
	Out of stock.
</div>
```

## Full Example

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="https://deligation--zygote.netlify.com/zygote-v1.css">
	</head>
	<body>

		<div data-esca-is-loading='b6101w' style='display:none'>Loading...</div>

		<div data-esca-is-available='b6101w' style='display:none'>
			<div data-esca-price='b6101w'></div>
			<button
				data-esca-add-to-cart
				data-id='b6101w'
				data-name='Product name'
				data-img='http://via.placeholder.com/150x150'
				data-url='/'
				data-desc='This is the product description.'
				data-open-cart>
				Add to Cart
			</button>
		</div>

		<div data-esca-is-not-available='b6101w' style='display:none'>Out of stock</div>


		<script src="https://deligation--zygote.netlify.com/zygote-v1.js"></script>
		<script src="https://escalade-ecommerce-inject.netlify.com/v1.js"></script>
		<script>
			new EscaEcomm({
				siteId: 'goalrilla'
			})
		</script>
	</body>
</html>
```