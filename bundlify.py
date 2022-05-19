## Made by LinuxRocks2000 (weird_pusheen) with some assistance from stackoverflow and various documentation.


from bs4 import BeautifulSoup as Soup


indexhtml = open("index.html", "r+")
document = indexhtml.read()
soup = Soup(document)


for tag in soup.findAll("script"): ## JS
    if 'src' in tag.attrs: ## If it's an external script
        src = tag['src']
        tag.attrs = {x: y for x, y in tag.attrs.items() if x != "src"} ## Delete "src" from it
        file = open(src)
        tag.string = file.read()
        file.close()

for tag in soup.findAll("link"): ## CSS now
    if 'rel' in tag.attrs and tag['rel'][0] == "stylesheet": ## If it's an external css file
        src = tag['href']
        tag.attrs = {x: y for x, y in tag.attrs.items() if x != "href"} ## Delete "href" from it
        tag.name = "style"
        file = open(src)
        tag.string = file.read()
        file.close()
        
indexhtml.write(str(soup))
