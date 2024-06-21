export default function Checkout () {
    return (
        <main id="checkout-main">
            <section id="fill-info-checkout">a</section>
            <section id="brief-cart-checkout">
                <div className="brief-inner-box">
                    <div>cart</div>
                    <div className="apply-code-brief">
                        <input type="text" placeholder="Discount code or gift card" />
                        <button>Apply</button>
                    </div>
                    <div className="subtotal-and-shipping-brief">
                        <div>
                            <p>Subtotal</p>
                            <p>Shipping</p>
                        </div>
                        <div>
                            <p>€391.20</p>
                            <p>Calculated at next step</p>
                        </div>
                    </div>
                    <div className="total-brief">
                        <p>Total</p>
                        <p>EUR €391.20</p>
                    </div>
                </div>
            </section>
        </main>
    )
}