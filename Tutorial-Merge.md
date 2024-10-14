
# Atualizando sua branch e realizando merges

## 1. Verifique e realize um commit na sua branch, se houver pendências.

### 2. Atualizando a branch hipotética chamada `thiago`

#### Passo 1: Troque para a branch principal
```bash
git checkout main
```

#### Passo 2: Baixe a nova versão da branch principal
```bash
git pull origin main
```

#### Passo 3: Acesse a branch que será mesclada com a `main` (neste exemplo, `thiago`)
```bash
git checkout thiago
```

#### Passo 4: Realize o merge (Esse merge traz as atualizações da `main` para sua branch)
```bash
git merge main
```

#### Passo 5: Adicione arquivos pendentes
```bash
git add .
```

#### Passo 6: Faça commit das mudanças
```bash
git commit -m "mensagem descrevendo o merge"
```

#### Passo 7: Suba as atualizações para o repositório remoto
```bash
git push origin thiago
```

---

## 3. Atualizando a `main`

#### Passo 1: Troque para a `main`
```bash
git checkout main
```

#### Passo 2: Atualize a `main` (Se a sua branch `main` já estiver atualizada, não haverá atualizações)
```bash
git pull origin main
```

#### Passo 3: Faça o merge da branch hipotética (`thiago`)
```bash
git merge thiago
```

#### Passo 4: Adicione arquivos pendentes (se houverem)
```bash
git add .
```

#### Passo 5: Faça commit das mudanças (se necessário)
```bash
git commit -m "mensagem descrevendo o merge"
```

#### Passo 6: Suba as atualizações para o repositório remoto
```bash
git push origin main
```
