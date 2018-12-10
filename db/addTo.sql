insert into operator
    (name_last, name_first, title, rate)
values
    ($1, $2, $3, $4);
select *
from operator;