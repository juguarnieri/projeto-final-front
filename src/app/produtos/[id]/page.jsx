"use client";

import { useState, useEffect } from "react";
import { Card, Spin, Button, Descriptions } from "antd";
import { ArrowLeftOutlined, ShoppingOutlined, DollarOutlined, TagOutlined } from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";
import styles from "./[id].module.css";

export default function ProductDetailsPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
        setProduct(data);
      } catch (e) {
        console.error("Erro ao buscar produto:", e);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    if (params?.id) fetchProduct();
  }, [params?.id]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingWrapper}>
          <Spin size="large" />
          <p className={styles.loadingText}>Carregando detalhes do produto...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className={styles.container}>
        <div className={styles.errorWrapper}>
          <h3>Produto não encontrado</h3>
          <Link href="/produtos">
            <Button type="primary" icon={<ArrowLeftOutlined />}>Voltar para lista</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/produtos">
          <Button icon={<ArrowLeftOutlined />} className={styles.backButton}>Voltar</Button>
        </Link>
        <h2 className={styles.title}>Detalhes do Produto #{product.id}</h2>
        <Link href="/">Home</Link>
      </div>

      <div className={styles.contentWrapper}>
        <Card className={styles.mainCard}>
          <div className={styles.imageCol}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
          </div>
          <div className={styles.infoCol}>
            {/* ...textos e botões... */}
          </div>
        </Card>

        <div className={styles.descriptionCard}>
          <div className={styles.descriptionTitle}>Descrição</div>
          <p className={styles.descriptionText}>{product.description}</p>
        </div>

        <Card title={<><TagOutlined /> Informações do Produto</>} className={styles.detailCard}>
          <Descriptions column={1} bordered>
            <Descriptions.Item label="Nome">{product.title}</Descriptions.Item>
            <Descriptions.Item label="Categoria">{product.category}</Descriptions.Item>
            <Descriptions.Item label="Preço">R$ {product.price}</Descriptions.Item>
            <Descriptions.Item label="Descrição">{product.description}</Descriptions.Item>
            {product?.rating && (
              <Descriptions.Item label="Avaliação">
                {product.rating.rate} ({product.rating.count} avaliações)
              </Descriptions.Item>
            )}
          </Descriptions>
        </Card>
      </div>
    </div>
  );
}