function Book(title, author, pages, read_yet) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read_yet = true
  this.info = function () {
    info_str = this.title + "by" +  this.author + ", " + this.pages + "pages, "
    if (read_yet) {
      info_str += "already read."
    } else {
      info_str += "not read yet."
    }
    return info_str
  }
}

book = new Book("Wherever You Go, There You Are", "Jon Kabat-Zinn", 200, true)
console.log(book.info());