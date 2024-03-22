Creamos una carpeta backend

Creamos el entorno virtual
    python -m venv env

activamos el entorno virtual
    env\Scripts\activate

instalamos las dependencias
    pip install django djangorestframework

creamos un proyecto nuevo
    django-admin startproject taskapi .

creamos una app
    python manage.py startapp tasks

en taskapi settings agreamos la app y la libreria restframework

en la app tasks agregamos un modelo

en terminal hacemos para crear la base de datos
    python manage.py makemigrations

    python manage.py migrate

creamos un archivo serializers y creamos el serializador del modelo creado

creamos un archivo api o views y agregamos las rutas y permisos

creamos un archivo urls y agregamos la ruta

dentro de la aplicacion principal taskapi importamos la ruta de nuestra app