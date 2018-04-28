# escalade-ecommerce-inject

Client side JavaScript utilities to add Escalade's ecomm system to any website.

## Getting started

Insert the JavaScript file before your closing `</body>` tag:

```html
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
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

**Note:** Make sure the `data-id` attribute is all lowercase.

### Price

To display pricing, add the `data-esca-price` attribute along with the product ID.

```html
<span data-esca-price="id123"></span>
```

### Loading Animations/Elements

To show an element only when stock & price is being fetched, add the `data-esca-is-loading` attribute along with the product ID.

```html
<div data-esca-is-loading="id123" style="display:none">
	Loading...
</div>
```

### Show When Available

To show an element only if the product is in stock, add the `data-esca-is-available` attribute along with the product ID.

Wrap this around the add to cart button to make sure it only shows if the product is in stock.

```html
<div data-esca-is-available="id123" style="display:none">
	<button
		data-esca-add-to-cart
		data-id="id123"
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
<div data-esca-is-not-available="id123" style="display:none">
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

		<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
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

## Testing

For testing against Escalade's test environment, add the `environment` property when constructing the class:

```javascript
var escaEcomm = new EscaEcomm({
	siteId: 'goalrilla',
	environment: 'testing'
})
```

Then use any one of these testing credit card numbers.

From [authorize.net](https://developer.authorize.net/hello_world/testing_guide/): Use any expiration date after today’s date. If the card code is required, please use any 3-digit combination for Visa, Mastercard, Discover, Diners Club, EnRoute, and JCB; use a 4-digit combination for American Express.


Test Card Brand | Number
--- | ---
American Express | 370000000000002
Discover | 6011000000000012
JCB | 3088000000000017
Diners Club/ Carte Blanche | 38000000000006
Visa | 4007000000027, 4012888818888, 4111111111111111
Mastercard | 5424000000000015, 2223000010309703, 2223000010309711

## Dynamically Generated Elements

For websites that generate ecommerce elements on the fly (such as React or Angular), you can initiate new elements by calling the `getElements` property. If you need to immediately update the the new elements, just call `updateElements`.

```javascript
var escaEcomm = new EscaEcomm({
	siteId: 'goalrilla'
})

// Then after new elements have been rendered in the DOM...
escaEcomm.getElements()
	.updateElements()
```
