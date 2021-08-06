function AppendElements(htmlStringList)
{
  for (let i = 0;i < htmlStringList.length;++i)
  {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    document.body.appendChild(div);
  }
}