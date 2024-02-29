using System.Data;
using UnityEngine;
using static UnityEngine.GraphicsBuffer;

public class Default : MonoBehaviour
{

    private int minShootCooldown = 2500;
    private int maxShootCooldown = 6000;
    private int shootCooldown = 0;

    [SerializeField]
    private GameObject bullet;

    private GameObject target;

    private void Start()
    {
        target = GameObject.FindGameObjectWithTag("Player");
    }

    void Update()
    {
        var step = 2f * Time.deltaTime;

        if (Vector3.Distance(transform.position, target.transform.position) > 15f)
        {
            transform.position = Vector3.MoveTowards(transform.position, target.transform.position, step);
        }else if(Vector3.Distance(transform.position, target.transform.position) < 15f)
        {
            transform.position = Vector3.MoveTowards(transform.position, target.transform.position, -step);
        }

        transform.LookAt(target.transform);

        if (shootCooldown == 0)
        {
            bullet.transform.position = transform.position;
            bullet.transform.rotation = transform.rotation;
            Instantiate(bullet);
            shootCooldown = Random.Range(minShootCooldown, maxShootCooldown);
        }
        shootCooldown--;
    }
}
