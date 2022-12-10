---
title: Introduction
author: m0n4d++
date: 2022-12-09
desc: An introduction to blogging task, just a placeholder and temporary post
---

## Functional Programming

![](/images/introduction/1.jpg)

Amet in impedit magnam ipsum autem. Asperiores eaque laboriosam quaerat 
dolor ad debitis? Accusantium error explicabo reprehenderit deserunt quas 
aliquam Quo dolores voluptate porro natus mollitia recusandae! Error quas nemo 
Dolor repudiandae facilis corrupti ullam quidem laboriosam dolorem dignissimos? 
Nemo a suscipit earum aspernatur at Excepturi consectetur quis quidem illum 
adipisci. Aliquid debitis aut aut quibusdam sunt? Consequuntur impedit 
doloremque officia reiciendis quos. Ratione sed possimus dolores iste 
totam Libero possimus sed ipsa perferendis delectus Aliquid odio maiores
blanditiis natus perferendis Pariatur quam veniam magnam quidem temporibus 
Porro commodi tenetur id officiis totam ad ipsum Quia quisquam

```c
/*
 * TODO: create map for builtin command
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <pwd.h>
#include <sys/wait.h>
#include <readline/readline.h>
#include <readline/history.h>
#include <signal.h>
#include "ysh.h"

void ysh_loop (void);
char* ysh_read_line (void);
char** ysh_parse_line (char *line);
int ysh_execute (char **args);
int ysh_launch (char **args);
char* prompt (void);

/*
 * Function prototypes of builtin shell commands
 *
 */
int ysh_builtin_cd (char **args);
int ysh_builtin_help (char **args);
int ysh_builtin_exit (char **args);
int builtin_nums (void);

int
main (int argc, char **argv)
{
	// load config file

	// call shell main loop
	ysh_loop ();

	// clean up

	return EXIT_SUCCESS;
}

/*
 * ysh_loop: main loop of shell
 */
void
ysh_loop (void)
{
	char *line;
	char **args;
	int status;

	do {
		line = ysh_read_line (); // read a line from user
		args = ysh_parse_line (line); // parse user input and tokenize it
		status = ysh_execute (args); // execute the command

		free (line);
		free (args);
	} while (status);
}

/*
 * prompt: prompt user for command
 */
char*
prompt (void)
{
	char *cwd, *buf;
	char *host;
	char *prm;
	size_t cwdsize;

	cwdsize = YSH_LINE_BUFSIZE;
	host = prm = buf = malloc (cwdsize * sizeof (size_t));
	if (!prm || !buf || !host) {
		fprintf (stderr, "%s: allocation error\n", PROGNAME);
		exit (EXIT_FAILURE);
	}
	cwd = getcwd (buf, cwdsize);
	gethostname (host, cwdsize);

	/* sprintf (prm, "\033[32m%s\033[m\n$ ", cwd); */
	sprintf (prm, "%s\n$ ", host);
	return prm;
}

/*
 * ysh_read_line: read line from stdin
 */
char*
ysh_read_line (void)
{
	char *line;
	char *prompt_user;

	/* signal (SIGINT, SIG_IGN); */
	prompt_user = prompt ();
	line = readline (prompt_user);

	if (line == NULL) {
		printf ("exit\n");
		exit (EXIT_SUCCESS);
	}

	return line;
}


/*
 * ysh_parse_line: parse and tokenize line input
 */
char**
ysh_parse_line (char *line)
{
	char **tokens;
	char *token;
	int bufsize, position;

	position = 0;
	bufsize = YSH_TOK_BUFSIZE;
	tokens = (char **) malloc (bufsize * sizeof (char *));
	if (!tokens) {
		fprintf (stderr, "%s: allocation error\n", PROGNAME);
		exit (EXIT_FAILURE);
	}

	token = strtok (line, YSH_TOK_DELIM);
	while (token != NULL) {
		tokens[position] = token;
		++position;

		if (position >= bufsize) {
		bufsize += YSH_TOK_BUFSIZE;
		tokens = (char **) realloc (tokens, bufsize * sizeof (char *));

		if (!tokens) {
			fprintf (stderr, "%s: allocation error\n", PROGNAME);
			exit (EXIT_FAILURE);
		}
		}

		token = strtok (NULL, YSH_TOK_DELIM);
	}

	tokens[position] = NULL;
	return tokens;
}


/*
 * ysh_execute: execute user command
 */
int
ysh_execute (char **args)
{
	int i;

	if (args[0] == NULL) {
		return 1; // empty command
	}

	for (i = 0; i < builtin_nums (); ++i) {
		if (strcmp (builtin_str[i], args[0]) == 0) {
		return (*builtin_func[i]) (args);
		}
	}

	return ysh_launch (args);
}

/*
 * ysh_launch: launch a new shell process
 */
int
ysh_launch (char **argv)
{
	pid_t pid, wpid;
	int status;

	pid = fork ();
	if (pid == 0) { // child process
		if (execvp (argv[0], argv)) {
		// if it returns anything, an error has occured
		perror (PROGNAME);
		}
		exit (EXIT_FAILURE);
	} else if (pid < 0) { // error creating child process
		perror (PROGNAME);
	} else { // parent process
		do {
		wpid = waitpid (pid, &status, WUNTRACED);
		} while (!WIFEXITED (status) && !WIFSIGNALED (status));
	}

	return 1;
}
```

Lorem unde hic quibusdam aspernatur veniam odit Quisquam praesentium 
voluptatem qui maxime molestiae. Dolorem sapiente voluptatum repellendus 
soluta sed vitae adipisci? Cumque velit quis 
cumque necessitatibus esse, exercitationem inventore Dicta vitae eos 
repudiandae iusto illum magnam Nobis voluptate veniam earum aliquid 
atque Nemo exercitationem odio sed quis nesciunt. Omnis 
pariatur laudantium tempora minus asperiores. Veritatis voluptas vel 
aliquid aut tempora Animi accusamus vero necessitatibus voluptate obcaecati
, alias porro Doloribus quasi dolorem quaerat esse excepturi quam 
Ex optio doloremque vero neque maiores Deleniti nostrum voluptatem 
nemo delectus qui Error adipisci tempore laudantium dolorem 
aperiam doloribus dignissimos? Repellat accusantium iste hic aliquid 
non Totam tempore vero explicabo earum ex Sequi eum 
id ipsum necessitatibus incidunt officiis. Aliquid numquam distinctio 
iste nostrum explicabo Praesentium animi repellat voluptatum odio doloribus
! Illo voluptatem dolore accusamus nihil quibusdam enim facere Id 
placeat exercitationem in reiciendis placeat Possimus voluptatum molestias vero 
perspiciatis vel fuga. Eos itaque possimus unde repellendus 
dolores. Nesciunt natus suscipit deserunt provident error Rerum 
amet praesentium aut quas eaque Laudantium eos numquam 
quam modi animi? Beatae quaerat consequatur perferendis nam 
ad Quaerat sapiente facilis sit eius facilis? Illo 
fuga pariatur ducimus hic eos? Laborum nesciunt ex 
aperiam quo sapiente! Mollitia dicta quos qui nulla?
