[Markdown описание формата](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)


# Работа с git

#### 1. Инициализация нового репозитория кода

```bash
git init
```

#### 2. Создание файла исключений `.gitignore`
```bash
touch .gitignore
```
Внутри файла мы добавляем директории и файлы которые мы хотим исключить из индексации:

```gitignore
#Ignored directories
.idea/
.vc/
node_modules/

#Ignored files
.DS_Store
Thumbs.db
dektop.ini
package-lock.json
```

#### 3. Проверка статуса измений состояния файлов проекта

```bash
git status
```

#### 4. Индексация изменений
Добавить в Staging Area (переиндексировать все файлы, кроме конфигурационных)
```bash
git add *
```

Добавить в Staging Area (переиндексировать все файлы + файлы конфигурационные)
```bash
git add .
```

Добавить в staging для индексации новые файлы или модифицированные
```bash
git add --all
```

Добавить несколько файлов:
```bash
git add *.txt
```

Добавить несколько файлов
```bash
git add index.html css/style.css
```

```bash
git add docs/
```

удалить из индексации файл, но оставить в рабочей директории
```bash
git rm --cached 111.txt
```

удалить из индексации файл, и из рабочей директории
```bash
git rm -f 111.txt
```

#### 5. Фиксация изменений

```bash
git commit -m "сообщение о том, что сделано в коммите"
```

#### 6. Просмотр истории

```bash
git log
```

```bash
git log --oneline
```

```bash
git log --graph
```

```bash
git log --decorate
```

```bash
git log --graph --decorate
```

#### 6. Просмотр разницы изменений

```bash
git diff
```

```bash
git diff --staged
```

#### 7. Отмена изменений в файле, которые появились с момента последней фиксации изменений

```bash
git checkout index.html
```

#### 8. Отмена последнего коммита

Отменить последний коммит, но оставить изменения в staging files
```bash
git reset --soft HEAD\^
```

Отменить последний коммит, и все изменения (осторожно!)
```bash
git reset --hard HEAD\^
```

Отменить 2 последних коммита, и все изменения (осторожно!)
```bash
git reset --hard HEAD\^\^
```

#### 9. Редактирование информации о коммите
```bash
git commit --amend -m "добавление технической документации"
```
