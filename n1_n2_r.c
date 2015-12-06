#include<stdio.h>
#include<stdlib.h>
struct node * createnode(int value);
void printlist(struct node *head);
struct node * createlist(struct node *head);
struct node
{
	int data;
	struct node *next;
};
void main()
{
	struct node *head= NULL,*temp =NULL;
	head = createlist(head);
	printlist(head);
}
struct node * createlist(struct node *head)
{
	struct node *temp,*curr,*link;
	int n1,n2,r,i=1,j=1,val=0,count=0;
	//temp=curr=head;
	printf("\n Enter n1,n2,r values:\n");
	scanf("%d%d%d",&n1,&n2,&r);
	val = n1*i++;
	link=createnode(val);
	count++;
	if(count == r)
	{
		printf("\n the rth element is %d",temp->data);
		return head;
	}
	head = link;
	temp = curr = head;
	if(n1 != n2)
	{
	while(1)
	{
		if( (n2 *j)%n1 == 0)
		{
			while((n2*j)%n1 == 0)
				j++;
		}
		val = n2*j++;
		link= createnode(val);
		temp->next = link;
		temp = link;
		count++;
		if(count == r)
		{
			printf("\n the rth element is %d",temp->data);
		    return head;
		}
		val = n1 * i++;
		link = createnode(val);
		temp->next = link;
		temp = link;
		count++;
		if(count == r)
		{
			printf("\n the rth element is %d",temp->data);
		    return head;
		}
		
	}

	}
	else
	{
		while(1)
		{
		val = n1 * i++;
		link = createnode(val);
		temp->next = link;
		temp = link;
		count++;
		if(count == r)
		{
			printf("\n the rth element is %d",temp->data);
		    return head;
		}
		}
	}



}
void printlist(struct node *head)
{
	struct node *temp;
	temp=head;
	printf("\n the elements are:\n");
	while(temp != NULL)
	{
		printf("%d\t",temp->data);
		temp = temp->next;
	}
}

struct node * createnode(int value)
{
	struct node *temp;
	temp = (struct node *)malloc(sizeof(struct node));
	if(temp != NULL)
	{
		temp->data = value;
		temp->next = NULL;
	}
	return temp;
		
}
