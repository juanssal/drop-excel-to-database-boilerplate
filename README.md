# upload-excel-to-database-boilerplate
Drop your excel files into a web platforms and feed your database with the info. Files are then removed.

The idea is that the user can select or just drop an excel file in an app and this will be processed into JSON and then fed to the database.
The file is then deleted to alleviate storage.

Modules used:
- multer (for handling the file upload)
- express (for the server and routes)
- fs (for deleting the files)
- xlsx (for parsing excel data)
