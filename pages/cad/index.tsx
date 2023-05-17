import { Container, Typography } from '@mui/material'
import React from 'react'

const cad = () => {
  return (
    <Container maxWidth="md" sx={{textAlign: "center"}}>
      <Typography variant='h2'>フォトグラメトリ</Typography>
      <Typography>フォトグラメトリと言われる、画像から3Dモデルを作り出す技術を保有しています。</Typography>
      <Typography variant='h2'>3Dプリンター</Typography>
      <Typography>3Dモデル作成、もしくは3Dモデルをお渡しいただければ、3Dプリント致します。材料にご指定がございましたら、外部サービスを使って、代行いたします。</Typography>      
    </Container>
  )
}

export default cad