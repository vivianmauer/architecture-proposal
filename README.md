# Proposta Arquitetura

Essa proposta visa otimizar a manutenção, centralizar API requests e gerenciamento de estado utilizando Redux toolkit + RTK Query


# Estrutura proposta para as Dashboards

```
/app
	/client
		layout.tsx (consome a store do client)
	/keyholder
		layout.tsx (consome a store do keyholder)
		/tela1
			/components
			page.tsx
		/tela2
		/etc
/stores
	/keyholder
		/hooks
			index.ts
		/api
			index.ts
			selectors.ts
			types.ts
		/features
			/holders
				selectors.ts
				slice.ts
				types.ts
		index.tsx
		types.ts
```

## RTK Query

A proposta é utilizar RTK Query para abstrair a implementação de actions asíncronas e gerenciamento de estado, cache, invalidação e etc
