# Evolution SDK TypeScript

Este projeto é um SDK TypeScript para a API Evolution, oferecendo uma interface fácil de usar para interagir com serviços de mensagens WhatsApp.

## Características

- Totalmente escrito em TypeScript
- Suporte a promises/async-await
- Testes unitários inclusos
- Exemplo de uso fornecido

## Instalação

Para instalar o SDK, use o seguinte comando npm:

```bash
npm install evolution-sdk-ts
```

## Uso

Aqui está um exemplo básico de como usar o SDK:

```typescript
import { createSdk } from 'evolution-sdk-ts';

async function main() {
  const sdk = createSdk('https://sua-api-url.com', 'sua-chave-api');
  const instanceName = 'minha-instancia';

  try {
    // Criar uma nova instância
    const createResult = await sdk.create(instanceName);
    console.log('Instância criada:', createResult);

    // Verificar o status da instância
    const statusResult = await sdk.instanceStatus(instanceName);
    console.log('Status da instância:', statusResult);

    // Enviar uma mensagem
    const messageResult = await sdk.sendMessage(instanceName, '5511999999999', 'Olá, mundo!');
    console.log('Mensagem enviada:', messageResult);
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

main();
```

## API

O SDK oferece os seguintes métodos principais:

- `create(instance: string, qrcode?: boolean)`: Cria uma nova instância.
- `sendMessage(instance: string, number: string, message: string, options?: any)`: Envia uma mensagem.
- `connect(instance: string)`: Conecta uma instância.
- `instanceStatus(instance: string)`: Verifica o status de uma instância.

Para mais detalhes sobre cada método, consulte a documentação de código.

## Desenvolvimento

Para configurar o projeto para desenvolvimento:

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Compile o projeto: `npm run build`
4. Execute os testes: `npm test`

## Contribuindo

Contribuições são bem-vindas! Por favor, sinta-se à vontade para submeter um Pull Request.

## Licença

Este projeto está licenciado sob a licença ISC.