import os

def getPath():
  return os.getcwd()

def load( filename ):
  with open(filename, 'r') as myfile:
    return myfile.read()

def save( filename, componentType, content, componentName, rootPath ):
  outputDir = rootPath + componentType + 's\\' + componentName
  outputPath = outputDir + '\\' + filename
  # create output folder
  if not os.path.exists( outputDir ):
    os.makedirs( outputDir )
  with open(outputPath, "w") as text_file:
    text_file.write(content)


def toCamelCase( targetStr, divisionChar = '-' ):
  components = targetStr.split(divisionChar)
  return components[0].title() + ''.join(x.title() for x in components[1:])


def replaceContent( rawData, componentName ):
  camelName = toCamelCase(componentName,'-')
  mod1 = rawData.replace('{__Name__}', camelName )
  mod2 = mod1.replace('{__name__}', componentName )

  content = mod2
  return content