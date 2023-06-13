
import { Container, Cart, CartProducts, Product, CartInfo } from "./style"
import trashicon from "../../assets/trashicon.svg"
import check from "../../assets/check.svg"
import bag from "../../assets/bag.svg"
import loguinho from "../../assets/carrinhovazio.jpg"

import { useState, useEffect } from "react"

export function Carrinho() {

    var total = 0
    var qntd = 0
    const [carrinho, setCarrinho] = sessionStorage.getItem("cart") != null ? (useState(JSON.parse(sessionStorage.getItem("cart")))) : (useState())

    useEffect(() => {
    }, [carrinho])

    function removeProduct(id) {
        var products = JSON.parse(sessionStorage.getItem("cart")).listaProdutos

        for (var i = 0; i < products.length; i++) {
            if (products[i].produto.id_produto === id) {
                products.splice(i, 1)
                break
            }
        }
        if (products.length == 0)
            sessionStorage.removeItem("cart")
        else {
            sessionStorage.setItem("cart", JSON.stringify({ listaProdutos: products }))
        }
        setCarrinho({ listaProdutos: products })
    }

    return (
        <Container>
            <h4>Meu Carrinho</h4>
            <Cart>

                {sessionStorage.getItem("cart") != null ? (
                    <>
                        <CartProducts>
                            {carrinho.listaProdutos.map(produto => {
                                total += parseFloat(produto.produto.valor) * parseInt(produto.produto.quantidade)
                                qntd += parseInt(produto.produto.quantidade)
                                return (
                                    <Product>
                                        <img src={`https://trabalho-api-production.up.railway.app/upload/view/${produto.produto.id_imagem}`} />
                                        <div className="productInfo">
                                            <div>
                                                <span><span>{produto.produto.nome}</span></span>
                                                <span><span>ID: </span>{produto.produto.id_produto}</span>
                                            </div>
                                            <div>
                                                <span><span>Valor unitário: </span> R$ {produto.produto.valor}</span>
                                                <span><span>Quantidade: </span>{produto.produto.quantidade}</span>
                                            </div>
                                        </div>
                                        <div className="productDelete" onClick={() => removeProduct(produto.produto.id_produto)}>
                                            <img src={trashicon} />
                                        </div>
                                    </Product>
                                )
                            })}
                        </CartProducts>
                        <CartInfo>
                            <span id="total"><span id="totalValue">Total: </span>R$ {total.toFixed(2)}</span>
                            <div>
                                <span><span>Quantidade total: </span>{qntd}</span>
                                <span><span>Frete: </span>grátis!</span>
                            </div>
                            <hr />
                            <a href="/pagamento">
                                <button><img src={check} />Finalizar compra</button>
                            </a>
                            <br />
                            <a href="/">
                                <button><img src={bag} />Continuar comprando</button>
                            </a>
                        </CartInfo>
                    </>) : (
                        <img src={loguinho}/>
                )
                }
            </Cart>
        </Container>
    )
}