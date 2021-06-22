#pragma warning(disable:4996)
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

struct book_record {
    char signiture[50];
    char author[30];
    char publisher[30];
    int publishYear;
    int pageNum;
    int ISBN;
};

void swap(struct book_record arr[], int i, int j){
    struct book_record temp;
    temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp; 
}

void sort(struct book_record arr[], int count)    // 매개변수로 정렬할 배열과 요소의 개수를 받음
{
    int temp;

    for (int i = 0; i < count; i++)    // 요소의 개수만큼 반복
    {
        for (int j = 0; j < count - 1; j++)   // 요소의 개수 - 1만큼 반복
        {
            if (arr[j].author > arr[j + 1].author)          // 현재 요소의 값과 다음 요소의 값을 비교하여
            {                                 // 큰 값을
                swap (arr, i, j);         // 다음 요소로 보냄
            }
        }
    }
}


int main(){
    //Problem 1 : 파일 읽어오기
    int recordNum;

    File *fp;
    struct book_record records[50];

    fp = fopen('book_record.txt','w');
    if (fp == NULL){
        printf("종료");
    }
    else {
        fgets(recordNum,sizeof(recordNum),fp);

        char buffer[1024];
        for (int i =0; i<recordNum; i++){
            struct book_record record;
            fgets(record.signiture,sizeof(record.signiture),fp);
            fgets(record.author,sizeof(record.author),fp);
            fgets(record.publisher,sizeof(record.publisher),fp);
            fgets(record.publishYear,sizeof(record.publishYear),fp);
            fgets(record.pageNum,sizeof(record.pageNum),fp);
            fgets(record.ISBN,sizeof(record.ISBN),fp);
            records[i] = record; 
        }
    }

    //Problem 2 : 파일 정렬 및 출력
    sort(records, len(records));

    File *fnew;
    fnew = fopen('new_file.txt','w');
    fputs("Title",fnew);
    for (int i =0; i<45; i++){ fputs(' ',fnew); }
    fputs("Author",fnew);
    for (int i =0; i<24; i++){ fputs(' ',fnew); }
    fputs("Publisher",fnew);
    for (int i =0; i<21; i++){ fputs(' ',fnew); }
    fputs("year",fnew);
    for (int i =0; i<6; i++){ fputs(' ',fnew); }
    fputs('pages',fnew);
    for (int i =0; i<5; i++){ fputs(' ',fnew); }
    fputs('ISBN',fnew);
    for (int i =0; i<6; i++){ fputs(' ',fnew); }
    for (int i =0; i<140; i++){ fputs('-',fnew); }
    fputs('\n',fnew);
    
    for (int i =0; i<recordNum;i++){
        fputs(records[i].signiture,fnew);
        for (int j =0; j<50-len(records[i].signiture);i++){
            fputs(' ',fnew);
        }
        fputs(records[i].author,fnew);
        for (int j =0; j<30-len(records[i].author);i++){
            fputs(' ',fnew);
        }
        fputs(records[i].publishYear,fnew);
        for (int j =0; j<30-len(records[i].publisher);i++){
            fputs(' ',fnew);
        }
        fputs(records[i].publishYear,fnew);
        for (int j =0; j<10-len(records[i].publishYear);i++){
            fputs(' ',fnew);
        }
        fputs(records[i].pageNum,fnew);
        for (int j =0; j<10-len(records[i].pageNum);i++){
            fputs(' ',fnew);
        }
        fputs(records[i].ISBN,fnew);
        for (int j =0; j<10-len(records[i].ISBN);i++){
            fputs(' ',fnew);
        }
        fputs('\n',fnew)
    }
}

