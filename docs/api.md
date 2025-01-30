## Sumário
- [Uso da API](#uso-da-api)

## Uso da API

Exemplo de requisição para criar uma viagem:

```json
POST /trips
Content-Type: application/json

{
  "destination": "Paris",
  "startDate": "2024-12-01",
  "endDate": "2024-12-10",
  "activities": ["Torre Eiffel", "Museu do Louvre"]
}
```

Resposta esperada:

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "destination": "Paris",
  "startDate": "2024-12-01",
  "endDate": "2024-12-10",
  "activities": ["Torre Eiffel", "Museu do Louvre"],
  "createdAt": "2024-07-29T12:00:00.000Z",
  "updatedAt": "2024-07-29T12:00:00.000Z"
}
```