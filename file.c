#include<stdio.h>
void main()
{
	FILE *fp;
	char str[1000],ch;
	int count=0,k,pos,begin,end;
	fp = fopen("C:/Users/KING/Desktop/mrnd/dateprint.c","r");
	printf("\n Enter no of lines from last u want to print:");
	scanf("%d",&k);
	begin = ftell(fp);
	fseek(fp,0,2);
	end = ftell(fp);
	pos = ftell(fp);
	pos=ftell(fp);
	while(count<=k)
	{
		pos = ftell(fp);
		if(pos < begin)
			break;
		ch = fgetc(fp);
		if(ch == '\n')
			count++;
		fseek(fp,pos-1,begin);
	}
	while((ch = fgetc(fp))!=EOF)
		putchar(ch);
	fclose(fp);
}
