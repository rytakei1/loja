<template>
  <div class="flex flex-col grow overflow-y-auto">
    <div id="hero" class="min-h-[75vh] flex items-center justify-center">
      <div class="flex flex-col border-white rounded p-10 items-center">
        <h1 class="text-6xl text-white mb-4">Takei Máquinas</h1>
        <h2 class="text-2xl text-white mb-4">
          Venda e Assistência Técnica Especializada
        </h2>
        <div class="flex gap-4">
          <UButton color="white" variant="solid">Quem Somos</UButton>
          <UButton color="white">Loja Online</UButton>
        </div>
      </div>
    </div>
    <div id="quem-somos" class="flex p-16">
      <CldImage
        src="takei_maquinas/frente_loja_kskyq6"
        width="600"
        height="400"
        alt="frente_loja"
      />
      <div class="flex flex-col px-12 gap-2">
        <h2 class="text-2xl text-primary-900 font-bold mb-2">A Empresa</h2>
        <p>
          Fundada em 1966 como uma oficina para conserto de bombas hidráulicas,
          fomos diversificando nossos serviços para atender a necessidade dos
          nossos clientes.
        </p>
        <p>
          Vendemos equipamentos para jardinagem, peças e acessórios: Roçadeiras,
          Cortadores e Aparadores de Grama, Motoserras, Podadores,
          Pulverizadores, Sopradores de Folhas, Lavadoras de Alta Pressão, entre
          outros.
        </p>
        <p>
          Temos convênio com as mais conceituadas empresas do segmento para
          prestar o melhor serviço de pós-venda com técnicos especializados.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
#hero {
  background-image: linear-gradient(
      0deg,
      rgba(18, 20, 75, 0.6),
      rgba(18, 20, 75, 0.6)
    ),
    url("https://res.cloudinary.com/dw7dtx2vi/image/upload/v1714198240/takei_maquinas/cortador_gbnptx_hfdhda.jpg");
  background-position: 50% 30%;
  background-size: cover;
}
</style>
