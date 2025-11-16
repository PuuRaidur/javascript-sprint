function extractContent(content, start, end) {
    return content.slice(content.indexOf(start), content.lastIndexOf(end) + 1)
}