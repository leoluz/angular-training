Setup

VS Solution Explorer:
Right-click on the sln solution and 'Set StartUp Projects...'
Select 'Multiple startup projects' and set Action to 'Start' for both projects.

MobileService project:
Edit web.config, connectionStrings section with your local Db connection.

Package Manager Console
Select MobileService project and enter command: Update-Database